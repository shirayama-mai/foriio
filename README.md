# @shirayama-mai/foriio

## Contents
- [@shirayama-mai/foriio](#shirayama-maiforiio)
  - [Contents](#contents)
  - [What's\_this](#whats_this)
  - [Instrallation](#instrallation)
  - [How\_to\_use](#how_to_use)
    - [ESM](#esm)
  - [Usage](#usage)
    - [requestUser](#requestuser)
    - [requestWorks](#requestworks)
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
//ESM
import Foriio from '@shirayama-mai/foriio';

import { requestUser, requestWorks, filterWorks } = from '@shirayama-mai/foriio';

//CommonJS
const Foriio = require('@shirayama-mai/foriio');

const requestUser = require('@shirayama-mai/foriio').requestUser;
const requestWorks = require('@shirayama-mai/foriio').requestWorks;
const filterWorks = require('@shirayama-mai/foriio').filterWorks;
~~~

## Usage

### requestUser
Can retrieve information about the user corresponding to the API key.
~~~typescript
import Foriio, { requestUser } from 'src/index';

const sampleRequestUser = async (apiKey: string) => {
    const responseUser: Foriio.Response.User = await requestUser(apiKey);

    const user: Foriio.User = responseUser.user;

    console.log(user.screen_name);

    console.log(user.avatar.original);

    // any code here...

    // You can access user`s info
};
~~~

### requestWorks
Can get an array of the user's Works corresponding to the API key.
~~~typescript
import Foriio, { requestWorks } from 'src/index';

const sampleRequestWorks = async (apiKey: string) => {
    const responseWorks: Foriio.Response.Works = await requestWorks(apiKey);

    const works: Foriio.Work[] = responseWorks.works;

    // any code here...

    works.map(works => {
        // You can access to works objects.
    });
};
~~~

### filterWorks
It is possible to filter by Works type.

~~~typescript
import Foriio, { requestWorks, filterWorks } from 'src/index';

const sampleFilterWokrs = async (apiKey: string) => {
    const responseWorks: Foriio.Response.Works = await requestWorks(apiKey);
    const works: Foriio.Work[] = responseWorks.works;

    const imageWorks: Foriio.ImageWork[] = filterWorks(works, 'image');

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