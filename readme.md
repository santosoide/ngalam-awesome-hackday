# Ngalam Awesome Hackday

## Prerequisite
- node version `6.10` or higher
- install surge `npm install -g surge`
- install now.sh `npm install -g now`
- install netlify `npm install netlify-cli -g`
- install Static file serving and directory listing `npm install -g serve`
- install Gulp `npm install -g gulp`

## Deploy to Surge.sh

```
   cd ./ngalam-awesome-hackday/fronten-starter-kit/dist
   $ surge

   Surge - surge.sh

              email: edicyber@gmail.com
              token: *****************
       project path: /Users/edisantoso/hackday/ngalam-awesome-hackday/frontend-starter-kit/dist/
               size: 28 files, 1.0 MB
             domain: actually-floor.surge.sh
             upload: [====================] 100%, eta: 0.0s
   propagate on CDN: [====================] 100%
               plan: Free
              users: edicyber@gmail.com
         IP Address: 45.55.110.124

    Success! Project is published and running at actually-floor.surge.sh
    
```

## Now.sh

```
  cd ./ngalam-awesome-hackday/fronten-starter-kit/dist
  $ now
  
  > Deploying ~/hackday/ngalam-awesome-hackday/frontend-starter-kit/dist under edicyber@gmail.com
  > Ready! https://dist-ylqthgwcoj.now.sh (copied to clipboard) [6s]
  > You (edicyber@gmail.com) are on the OSS plan. Your code and logs will be made public.
  > NOTE: You can use `now --public` to skip this prompt
  > Synced 19 files (473.71KB) [15s]
  > Initializing…
  > Deployment complete!

```

## Netlify.com

```
  cd ./ngalam-awesome-hackday/fronten-starter-kit/dist
  $ netlify deploy 
  
  ? No site id specified, create a new site No
  ? Your Sites minister-beaver-43443: http://minister-beaver-43443.netlify.com
  ? Path to deploy? (current dir)
  Deploying folder: /Users/edisantoso/hackday/ngalam-awesome-hackday/frontend-starter-kit/dist

  Deploy is live (permalink):
    http://59f3fc13a6188f0b3ffeebe3.minister-beaver-43443.netlify.com

  Last build is always accessible on http://minister-beaver-43443.netlify.com

```
