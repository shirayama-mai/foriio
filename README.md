# @shirayama-mai/foriio

Non officatil library to use foriio api.

## Instrallation

```shell
$ npm install @shirayama-mai/foriio

$ yurn add @shirayama-mai/foriio

$ bun install @shirayama-mai/foriio
```

## Usages

### requestUser
```typescript
import Foriio from '@shirayama-mai/foriio';
/*
 * import { requestUser } from '@shirayama-mai/foriio'
 *
 * const Foriio = require('@shirayama-mai/foriio');
 * or
 * const requestUser = require('@shirayama-mai/foriio').requestUser;
 */

// Promise chain
Foriio.requestUser('API access key.')
.then((user) => {
    // your code here...
});

// async/await
const user = await Foriio.requestUser('API access key.');

// your code here...
```

### requestWorks
```typescript
import Foriio from '@shirayama-mai/foriio';
/*
 * import { requestWorks } from '@shirayama-mai/foriio'
 *
 * const Foriio = require('@shirayama-mai/foriio');
 * or
 * const requestWorks = require('@shirayama-mai/foriio').requestWorks;
 */

// Promise chain
Foriio.requestWorks('API access key.')
.then((works) => {
    // your code here...
});

// async/await
const works = await Foriio.requestWorks('API access key.');
// your code here...
```