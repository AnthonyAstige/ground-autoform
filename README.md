Some autoform actions wait for the server.  This can make an offline app that has grounded collections unresponsive when the internet connection is lost.

This package addresses some the most common problems I've encountered while making an offline app

## Installation

Add the package

`meteor add anthonyastige::ground-autoform`

Add groundType to your forms like so

`{{> quickForm groundType="insert" ...}}`

That's it.  The hooks should now automatically ground that autoform.

## References
* https://github.com/aldeed/meteor-autoform
* https://github.com/GroundMeteor/db
