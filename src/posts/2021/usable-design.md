---
pageTitle: Usable design
date: 2021-08-05
tags: web

---
### Clean interfaces

I can't help feeling that too much design is focused on visual aesthetics and not on making things usable. Aesthetics has its place and not everything has to be intuitively usable. Cleanly designed web interface do look good. However, removing interaction clues in order to make something look neat and clean is not always in the interests of the user.  Making them difficult to interact with leads to even more frustration.

Microsoft's web based [Outlook](https://outlook.com) is a good example. Don't get me wrong, I think Outlook is great. I use it every day, both at work and for my personal emails. The web version is very functional and generally well thought out in my opinion. Yet, the way the scroll bars are implemented is frustrating. Here's a screenshot of Outlook's user interface to illustrate my point:

![User interface of outlook](/assets/images/use-outlook-1.PNG)

The layout is split into four columns. The icons on the far left, the list of folders next to them, the list of emails in the selected folder and the content of the email selected to be read. All four columns has a vertical scrollbar if needed. In the image you see it on the list of emails. There is no scrollbar in the email display column itself, because it is not needed. You would see it if the email was longer. However on the first two columns the scrollbar is needed because there is more content to scroll to. However you don't see it. It only appears if you hover over those columns, in which case it looks like in this image:

![Scrollbar in column showing list of folders](/assets/images/use-outlook-2.PNG) 

So what issues do I have with this?

### Inconsistency

First of all I do not see the point in this need to hide the scrollbars when hover is removed from the column. This is inconsistent. Some scrollbars are permanently visible. Some aren't. How do I know there are more folders in the folder list without hovering over them?

Hiding the scrollbars serves no purpose. They don't cover anything up when they do appear, so hiding them 