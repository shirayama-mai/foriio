# @shirayama-mai/foriio

## Contents
- [@shirayama-mai/foriio](#shirayama-maiforiio)
  - [Contents](#contents)
  - [What's\_this](#whats_this)
  - [Instrallation](#instrallation)
  - [How\_to\_use](#how_to_use)
    - [ESM](#ESM)
    - [CJS](#CJS)
  - [Usage](#usage)
    - [initialize](#initialize)
    - [requestForiioUser](#requestForiioUser)
    - [requestForiioWorks](#requestForiioWorks)
    - [filterWorks](#filterworks)
- [@shirayama-mai/foriio](#shirayama-maiforiio-1)

## What's_this
Non officatil library to use foriio api.


## Instrallation
~~~shell
$ npm install @shirayama-mai/foriio

$ yurn add @shirayama-mai/foriio

$ bun install @shirayama-mai/foriio
~~~

## How_to_use
This package supports both ESM and CommonJS.

Incorporate it in a way that suits your project.

### ESM
~~~typescript
import { Foriio } from '@shirayama-mai/foriio';
// or
import Foriio from '@shirayama-mai/foriio';
~~~

### CJS
~~~typescript
const Foriio = require('@shirayama-mai/foriio');
~~~

## Usage

### initialize
~~~typescript
import { Foriio } from '@shirayama-mai/foriio';

const sampleInitialize = async (apyKey: string) => {
    const foriio = new Foriio(apiKey);
};

~~~

### requestUser
Can retrieve information about the user corresponding to the API key.
~~~typescript
import { Foriio } from '@shirayama-mai/foriio';

const sampleRequestUser = async (apiKey: string) => {
    const foriio = new Foriio(apiKey);

    const foriioUser = await foriio.getForiioUser();

    console.log(foriioUser.screen_name);

    console.log(foriioUser.profile.avatar.original);

    // any code here...

    // You can access user`s info
};
~~~

### requestWorks
Can get an array of the user's Works corresponding to the API key.
~~~typescript
import { Foriio } from '@shirayama-mai/foriio';

const sampleRequestWorks = async (apiKey: string) => {
    const foriio = new Foriio(apiKey);

    const foriioWorks = await foriio.getWorks(apiKey);

    // any code here...

    foriioWorks.map(works => {
        // You can access to works objects.
    });
};
~~~

### filterWorks
It is possible to filter by Works type.

~~~typescript
import { Foriio } from '@shirayama-mai/foriio';

const sampleFilterWokrs = async (apiKey: string) => {
    const foriio = new Foriio(apiKey);

    const foriioWorks = await foriio.getWorks(apiKey);

    const imageWorks: Foriio.ImageWork[] = foriio.filterWorks(foriioWorks, 'image');

    // any code here...

    imageWorks.map(imageWorks => {
        // You can use works info.

        console.log(imageWorks.title);        
        console.log(imageWorks.description);

        imageWorks.images.map(image => {
            // You can use image hrefs.

            console.log(image.urls.detail);
        });
    });
}
~~~

# @shirayama-mai/foriio