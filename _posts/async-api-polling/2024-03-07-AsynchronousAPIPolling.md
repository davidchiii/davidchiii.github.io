---
layout: post
title: "async API polling with Javascript"
date: 2024-03-07 2:07 +0700
description: Find a CTF. Find a Job.
tag:
  - javascript
  - API
image:
comments: true
---
I was scripting automating the onboarding process for lab members.

We recruit all our members through a "practice" ctf @ `https://recruit.osiris.bar`. It's a pretty generic CTFd instance running on-prem that I maintain. I was thinking we could have a message be sent to the new member when they complete the last challenge.

So basically when the member solves the challenge, the API updates, the script picks it up, and Superbot(⚡) goes to their dms to say hi.

**How do I know when the API changes?**

## Polling

The approach I went with was `sleep()` for a few seconds before requesting the endpoint again. This seemed to work pretty well without creating too much load on my server.

```javascript
  async function getSolves(){
    let response = await fetch (url, {
      method:"GET",
      cache:"no-cache",
      headers:{
        "Content-Type": "application/json",
        "Authorization": "Token <access-token>"
      },
    });
    const data = await response.json()
    return data["data"]
  }
  while(true){
    sleep();
    data = getSolves();
    doSomething(data);

    ...
  }
```

I think it's time for me to go to bed.