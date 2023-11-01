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
const sampleRequestUserPromise = async () => {
    Foriio.requestUser('API access key')
    .then(response => {
        const resUser: Foriio.ResponseUser = response.result;
        const user: Foriio.User = resUser.user;

        // your code here...
    });
};

// async/await
const sampleRequestUserAwait = async () => {
    const resUser: Foriio.ResponseUser = (await Foriio.requestUser('API access key.')).result;
    const user: Foriio.User = resUser.user;

    // your code here...
};
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
const sampleRequestWorksPromise = async () => {
    Foriio.requestWorks('API access key')
    .then(response => {
        const resWorks: Foriio.ResponseWorks = response.result;
        const works: Foriio.Works.DefaultWork[] = resWorks.works;

        // your code here...
    });
};
// async/await
const sampleRequestWorksAwait = async () => {
    const resWorks: Foriio.ResponseWorks = (await Foriio.requestWorks('API access key.')).result;
    const works: Foriio.Works.DefaultWorks[] = resWorks.works;

    // your code here...
};
```

### Filtering by works type
You can use filterd works by works type;

The sample is below.

```typescript
const works = await Foriio.requestWorks('API access key.').result.works;

const imageWorks = works.filter(_works => _works.type === 'image')
                        .map(_works => _works as Foriio.Works.ImageWorks);
```

### Handling AuthenticationError
If api access key is expired or invalid,
then AuthenticationError is throw.

The sample for handling error is below.
```typescript
import { requestUser, AuthenticationError } from '@shirayama-mai/foriio';

const sampleHandlingError = async () => {
    const response = await requestUser('api access key.');
    const result = response.result;

    if (result instanceof AuthenticationError) {
        // you can handling error;

        return;
    }

    const user = result;
    
    // your code for regular situation here...
};
```

# @shirayama-mai/foriio