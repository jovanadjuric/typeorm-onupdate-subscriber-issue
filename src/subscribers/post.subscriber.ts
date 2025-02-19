import { EventSubscriber, EntitySubscriberInterface, UpdateEvent } from "typeorm"
import { Post } from "../entities/post.entity"

@EventSubscriber()
export class PostSubscriber implements EntitySubscriberInterface {

  listenTo() {
    return Post
  }

  afterUpdate(event: UpdateEvent<Post>) {
    console.log(`after update`, event.entity)
  }
}
