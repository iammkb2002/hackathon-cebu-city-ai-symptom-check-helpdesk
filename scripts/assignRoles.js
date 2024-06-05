require('dotenv').config({ path: '.env.local' });
const admin = require('firebase-admin');

// Ensure the environment variable is loaded
const serviceAccountBase64 = process.env.GOOGLE_APPLICATION_CREDENTIALS_BASE64;
if (!serviceAccountBase64) {
  throw new Error('Missing GOOGLE_APPLICATION_CREDENTIALS_BASE64 environment variable');
}

// Decode the base64 service account key
const serviceAccount = JSON.parse(Buffer.from(serviceAccountBase64, 'base64').toString('utf8'));

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: `https://${process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID}.firebaseio.com`
});

const firestore = admin.firestore();
const auth = admin.auth();

const assignRolesToExistingUsers = async () => {
  try {
    const listUsersResult = await auth.listUsers();
    const promises = listUsersResult.users.map(async (userRecord) => {
      const userId = userRecord.uid;
      const userDoc = firestore.collection('users').doc(userId);
      const doc = await userDoc.get();
      if (!doc.exists) {
        // Set the default role to 'user'
        await userDoc.set({
          email: userRecord.email,
          role: 'user',
          displayName: userRecord.displayName || '',
          createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
        console.log(`Set role for user: ${userRecord.email}`);
      }
    });
    await Promise.all(promises);
    console.log('Roles assigned to all existing users.');
  } catch (error) {
    console.error('Error assigning roles:', error);
  }
};

assignRolesToExistingUsers();
