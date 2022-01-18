import { hash } from 'bcrypt';
import { v4 as uuidV4 } from 'uuid';

import createConnection from '../index';

async function create() {
  const connection = await createConnection();

  const id = uuidV4();
  const password = await hash('123456', 8);

  await connection.query(
    `INSERT INTO USERS(id, name, email, password, "isAdmin", created_at, updated_at)
      values('${id}', 'admin', 'admin@admin.com.br', '${password}', true, 'now()', 'now()')
    `,
  );

  await connection.close();
}

create().then(() => console.log('User admin created.'));
