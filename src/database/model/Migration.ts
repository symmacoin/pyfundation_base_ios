import { schemaMigrations, createTable } from '@nozbe/watermelondb/Schema/migrations';

const migrations = schemaMigrations({
  migrations: [
    /*
    {

      // ⚠️ Set this to a number one larger than the current schema version
      toVersion: 2,
      steps: [
        // See "Migrations API" for more details
     createTable({
          name: 'comments',
          columns: [
            { name: 'post_id', type: 'string', isIndexed: true },
            { name: 'body', type: 'string' },
          ],
        }),
      ],

    },
*/
  ],
});

export { migrations };
