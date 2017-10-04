[![Build Status](https://travis-ci.org/EMBL-Design-Language/prototype.svg?branch=master)](https://travis-ci.org/EMBL-Design-Language/prototype)

# prototype
A test vision of how the EMBL Design Language could feel in function (not yet in look).

- [View the prototype here](https://embl-design-language.github.io/prototype/)
- [Background reading and discussion](https://github.com/EMBL-Design-Language/Sprint-2/issues/6)

### Data structure

#### Drive the look
A legal document about the establishment of EMBL, very rational task and outward facing.
```
<meta name="embl:emotion" content="-10" />
<meta name="embl:external" content="10" />
```

A freely available online scientific service.
```
<meta name="embl:emotion" content="-5" />
<meta name="embl:external" content="7" />
```

A web page about scientific service that requires authorisation to access.
```
<meta name="embl:emotion" content="-3" />
<meta name="embl:external" content="4" />
```

The EMBL news landing page.
```
<meta name="embl:emotion" content="6" />
<meta name="embl:external" content="9" />
```

#### Drive the navigation structure
We utilise the Who, What, Where facets to determine a web page's placement within the navigation system

```
<meta name="embl:active" content="who:ciprianiteam" />
<meta name="embl:parent-1" content="what:research" />
<meta name="embl:parent-2" content="where:grenoble" />
```

##### What about URLs?
The URL is still a useful organic indication of content's placement within the overall ecosystem and brand, but the role of the content can change over time so a URL cannot be the sole driver of navigation and look.

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
