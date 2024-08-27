// This code sample uses the 'axios' library:
// https://www.npmjs.com/package/axios
const axios = require('axios');

const apiToken = 'nahid@ovuline.com:ATATT3xFfGF0K9nsm25drNUd8wWYemLvZGnSju4E1JhPh-d-i2Anr7iKK_ZxCYwbj3s1ubafjWCRZlYJ-e4v4hAct2wdh2FgpG6Kksh7kw8CK-wEcwly-TGSxMtFkZS-4hpu9qurMi3ll-Uxkk3yNzIdWU8e8KGsOuWq2Xk9myKLkvPj29iE3Gs=0857D74A';
const encodedToken = Buffer.from(apiToken).toString('base64');


// POD ID: '12103'
async function getUnreleasedVersions() {
    try {
      const response = await axios.get('https://ovuline.atlassian.net/rest/api/3/project/12103/versions', {
        headers: {
          'Authorization': `Basic ${encodedToken}`,
          'Accept': 'application/json'
        }
      });
  
      console.log(`Response: ${response.status} ${response.statusText}`);
  
      const versions = response.data;
      const unreleasedVersions = versions.filter(version => version.released === false);
  
      console.log('Unreleased Versions:');
      console.log(unreleasedVersions);
    } catch (error) {
      if (error.response) {
        console.log(`Response: ${error.response.status} ${error.response.statusText}`);
        console.log(error.response.data);
      } else {
        console.error('Error:', error.message);
      }
    }
  }
  
  getUnreleasedVersions();