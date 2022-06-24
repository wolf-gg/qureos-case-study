import axios from 'axios';

export class MockDatabase {
  async connect() {
    const data = await axios.get('https://run.mocky.io/v3/d7f02fdc-5591-4080-a163-95a08ce6895e');
  }
}