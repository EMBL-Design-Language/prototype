# prototype
A test vision of how the EMBL Design Language could feel in function (not yet in look).

Background issue: https://github.com/EMBL-Design-Language/Sprint-2/issues/6

### List of pages in this test
The four flows to trial, and a representative list of sample pages/urls needed

https://github.com/EMBL-Design-Language/user-stories/issues/16
![prototype user journey wireframes 1](https://user-images.githubusercontent.com/928100/31082816-d073ff6c-a787-11e7-8299-afc71dcdf3a9.png)
- EMBL.org
- /contact
- /jobs
- /locations
- /locations/heidelberg
- /locations/heidelberg/contact
- /search


https://github.com/EMBL-Design-Language/user-stories/issues/23
![prototype user journey wireframes](https://user-images.githubusercontent.com/928100/31082809-c7c8273a-a787-11e7-8fac-8e5270ae18c9.png)
- /news/[press-release]
- /news
- EMBL.org
- /research
- /research/[content on a research topic]
  - /training
  - /training/[content related to a specific domain/research area]
- /updates

https://github.com/EMBL-Design-Language/user-stories/issues/24
![image](https://user-images.githubusercontent.com/928100/31082741-9f30ce4e-a787-11e7-8611-93501363b243.png)
- sampleService.com
- EDAM topic hub
- EDAM fragment pages (edam:news, edam:services)

https://github.com/EMBL-Design-Language/user-stories/issues/29
![image](https://user-images.githubusercontent.com/928100/31082714-8d363d8c-a787-11e7-894c-61a34b909485.png)
- embl.org
- /about
- /about/impact
- /about/hinxton/impact

If in principle that list of URL fragments looks ok, I'll start having a look at a structure to prototype them.

## Building this on your machine

You'll need to build this on your local.

To install:
1. `bower install`
2. `yarn` or `npm install`

To develop:
1. `gulp`: Will build the Sass and serve to your browser with browserSync
2. Edit `index.html`, a file in `./scss` or `./js`
