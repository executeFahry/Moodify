import SongList from "../src/components/SongList";
import { useSongs } from "../src/services/store";

const songs = useSongs.getState();
const [currentSong, setCurrentSong] = useState(songs[0].hub?.actions[1]);




// Creating a node
class Node {
   constructor(title, subtitle, images, genre) {
      this.musicNode = {
         title: title,
         subtitle: subtitle,
         images: images,
         genre: genre,
      };
      this.prev = null;
      this.next = null;
   }
}

// creating double linked list obj and pointer
class DoublyLinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
      this.tempPos = null;
   }

   // push node to DLL
   push(name, length, path) {
      const newNode = new Node(title, subtitle, images, genre);
      if (this.length === 0) {
         this.head = newNode;
         this.tail = newNode;
         this.head.next = this.head;
         this.head.prev = this.head;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
         this.head.prev = newNode; // Make the head's previous point to the new tail
         newNode.next = this.head; // Make the new tail's next point to the head
         this.tail = newNode;
      }
      this.length++;
   }

   // set position of current node
   // default is pointer of head node
   setDefaultPointer() {
      this.tempPos = this.head;
   }

   // traverse DLL and return music obj
   traverse(direction) {
      // forward direction
      if (direction === 1 && this.tempPos.next != null) {
         this.tempPos = this.tempPos.next;
         return this.tempPos.musicNode;
      } else if (direction === -1) {
         // backward direction
         this.tempPos = this.tempPos.prev;
         return this.tempPos.musicNode;
      } else {
         return 0;
      }
   }

   // check for position of node
   nodePosition() {
      if (this.tempPos.next == this.head) {
         return -1; // last pos
      } else if (this.tempPos.prev == this.head.prev) {
         return 1; // first pos
      } else {
         return 0; // middle pos
      }
   }
}

// Create a new instance of DoublyLinkedList
const dll = new DoublyLinkedList();

// Add songs to the doubly linked list
songs.forEach((song) => {
   dll.push(song.title, song.subtitle, song.images, song.genre);
});

// Set the default pointer to the head node
dll.setDefaultPointer();
