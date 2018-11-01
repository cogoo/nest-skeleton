# Shared Module

Can also be called common module. (There is some sense in having a core and shared module). Core gets imported into EVERY module and shared just for those that need it.

You can bundle up shared functonality that goes together.

## How To

You will import this module into any other module where you want to use any controllers / services etc that are part of the shared module.

## Structure

``` ts
  * Shared
    * Controllers
      * shared1.controller.ts
      * shared2.controller.ts
    * Services
      *shared1.service.ts
    shared.module.ts
```
