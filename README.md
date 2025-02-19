# Issue with the `onUpdate` entity subscriber in TypeORM

The `onUpdate` entity subscriber does not have access to the PK of its entity.

This happens when an object literal that represents the partial entity gets passed as a second parameter to the `.update` method.

```
-- index.ts
await postRepository.update(post.id, { description: "Bacon ipsum dolor amet cow" })

-- post.subscriber.ts
afterUpdate(event: UpdateEvent<Post>) {
  console.log(`after update`, event.entity)
}
```
results in
```
// notice that the id is missing:
after update { description: 'Bacon ipsum dolor amet cow' }
```

## Environment
- typeorm @ 0.3.20
- node @ 22.14.0

## Usage
```
npm install
npm run start
```
