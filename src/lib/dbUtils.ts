import { db } from './firebaseClient'
import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore'

interface LoginDetailsType {
  // name: string
  owner: string
  // image: string | null
  contents: LoginContentType[]
}

type LoginDetailsTypeWithId = LoginDetailsType & { id: string }

interface LoginContentType {
  url: string;
  name: string;
  image: string;
  login: string;
  password: string;
}

async function getUserLoginDetails() {
  const data: LoginDetailsTypeWithId[] = []
  const q = query(
    collection(db, 'data'),
    where('owner', '==', '81f07a37-d25d-474c-b029-e71e2fefc85b')
  )
  const querySnapshot = await getDocs(q)
  querySnapshot.forEach((doc) => {
    data.push({ id: doc.id, ...doc.data() } as LoginDetailsTypeWithId)
  })
  return data
}

async function createLoginDetails() {
  const emptyPlaylistObject: LoginDetailsType = {
    owner: '81f07a37-d25d-474c-b029-e71e2fefc85b',
    contents: [],
  }
  const playlistDocRef = await addDoc(
    collection(db, 'playlists'),
    emptyPlaylistObject
  )
  return playlistDocRef.id
}

async function addToLoginDetails(
  id: string,
  whatToAdd: LoginContentType
) {
  const playlistDocRef = doc(db, 'data', id)
  await updateDoc(playlistDocRef, {
    contents: arrayUnion(whatToAdd),
  })
}

async function removeFromLoginDetails(
  id: string,
  whatToRemove: LoginContentType
) {
  const playlistDocRef = doc(db, 'data', id)
  await updateDoc(playlistDocRef, {
    contents: arrayRemove(whatToRemove),
  })
}

// async function deletePlaylist(playlistId: string) {
//   await deleteDoc(doc(db, 'playlists', playlistId))
// }

export {
  type LoginDetailsType,
  type LoginDetailsTypeWithId,
  type LoginContentType,
  getUserLoginDetails,
  addToLoginDetails,
  removeFromLoginDetails,
  // createLoginDetails,
  // getUserPlaylists,
  // createPlaylist,
  // addToPlaylist,
  // removeFromPlaylist,
  // deletePlaylist,
}
