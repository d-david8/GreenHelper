export default class BaseEntity {
  constructor(id = null) {
    this.id = id;
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
}
