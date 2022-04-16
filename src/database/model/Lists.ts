/* eslint-disable @typescript-eslint/no-explicit-any */

import { Model } from '@nozbe/watermelondb';
import {
  field,
  action,
  readonly,
  text,
  date,
  relation,
  immutableRelation,
  children,
  writer,
} from '@nozbe/watermelondb/decorators';
import { Q } from '@nozbe/watermelondb';

class Lists extends Model {
  static table = 'lists';
  /*
  static associations = {
    comments: { type: 'has_many', foreignKey: 'post_id' },
  }
  @text('title') title!: string;
  @text('body') body!: string;
  @date('last_event_at') lastEventAt!: Date;
  @relation('posts', 'post_id') post!: string;
  @immutableRelation('users', 'author_id') author!: string;
  static associations = {
    comments: { type: 'has_many', foreignKey: 'post_id' },
  }
  @children('comments') comments!: string;
  @lazy verifiedComments = this.comments.extend(
    Q.where('is_verified', true)
  )
  @field('is_spam') isSpam!: string;
  @writer async markAsSpam() {
    await this.update(comment => {
      comment.isSpam = true;
    })
  }
  get isRecentlyArchived() {
    // in the last 7 days
    return this.lastEventAt &&
      this.lastEventAt.getTime() > Date.now() - 7 * 24 * 3600 * 1000
  }
  */
  @field('id_')
  id_!: number;

  @field('name')
  name!: string;

  @field('url')
  url!: string;

  @field('group')
  group!: string | undefined;

  @field('logo')
  logo!: string | undefined;

  @field('token')
  token!: string;

  // These are our own fields
  @field('description')
  description!: string;

  @field('is_complete')
  isComplete!: boolean;

  // These are special fields that will automatically update when the
  // record is created and updated
  @readonly
  @date('created_at')
  createdAt!: Date;

  @readonly
  @date('updated_at')
  updatedAt!: Date;

  // Actions are functions that you can call on the database object
  // These can be something like calculating a new field, but in this
  // case we're using them to modify the database object directly.
  @action async rename(newName: any) {
    await this.update(t => {
      t.description = newName;
    });
  }

  @action async delete() {
    await this.markAsDeleted();
  }
}

export { Lists };
