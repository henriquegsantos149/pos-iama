export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const apiKey = process.env.ACTIVE_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ message: 'API key is missing' });
  }

  const {
    nome,
    email,
    telefone,
    formacao,
    area,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term
  } = req.body;

  try {
    // Format Date: DD/MM/YYYY or just current local date string (depending on what AC expects for Date fields)
    // ActiveCampaign date fields usually expect YYYY-MM-DD
    const currentDate = new Date().toISOString().split('T')[0];

    // 1. Sync Contact
    const syncResponse = await fetch('https://ambientalpro.api-us1.com/api/3/contact/sync', {
      method: 'POST',
      headers: {
        'Api-Token': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contact: {
          email,
          firstName: nome,
          phone: telefone,
          fieldValues: [
            { field: '831', value: utm_campaign || '' },
            { field: '832', value: utm_source || '' },
            { field: '833', value: utm_medium || '' },
            { field: '834', value: utm_content || '' },
            { field: '835', value: utm_term || '' },
            { field: '836', value: formacao || '' },
            { field: '837', value: area || '' },
            { field: '838', value: currentDate }
          ]
        }
      })
    });

    if (!syncResponse.ok) {
      const errorText = await syncResponse.text();
      console.error('Error syncing contact:', errorText);
      return res.status(500).json({ message: 'Failed to sync contact with ActiveCampaign' });
    }

    const syncData = await syncResponse.json();
    const contactId = syncData.contact.id;

    // 2. Add Tag (466: [LISTA DE ESPERA] [POS IA.MA] Lead)
    const tagResponse = await fetch('https://ambientalpro.api-us1.com/api/3/contactTags', {
      method: 'POST',
      headers: {
        'Api-Token': apiKey,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contactTag: {
          contact: contactId,
          tag: '466'
        }
      })
    });

    if (!tagResponse.ok) {
      const errorText = await tagResponse.text();
      console.error('Error adding tag:', errorText);
      return res.status(500).json({ message: 'Failed to add tag to contact in ActiveCampaign' });
    }

    return res.status(200).json({ success: true });

  } catch (error) {
    console.error('Serverless function error:', error);
    return res.status(500).json({ message: 'Internal Server Error' });
  }
}
