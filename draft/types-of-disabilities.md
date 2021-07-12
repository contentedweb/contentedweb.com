---
pageTitle: Types of disabilities
date: 2020-12-09
---

There are several types of disabilities, each of which have their own needs with respect to creating accessible websites.  These types can be used to create use cases or "personas" to be considered by usability designers when creating websites.
---

### Blind
Blind people can't use a screen to look at content on websites. So they need to use assistive technology such as screen readers to read the content back to them.  

#### Screen readers
Screen readers are software that is designed to translate text into speech. Screen readers do not actually see the screen. Instead they look at the underlying code of the website, known as HTML. This code is used by normal web browsers to display the content. In a well structured web page the HTML will tell the browser which parts of the content are headings, which is a title, which are plain paragraphs and which are links - to give a few examples. In short: the HTML code will add semantic meaning to the content. Screen readers can use this semantic information to provide information back to the person using the screen readers. For example it could read back to a blind person a list of all the links or all the main headings on the page.

If the HTML used in the web page has not been coded with semantics in mind, this information is lost to users of screen readers. For example, it is possible to make text look big and place it at the top of the page without marking it a title or heading using HTML. This approach will work for people using a web browser because they can visually see the text is a heading. But for a screen reader all visual concepts are lost and so it will not be able to provide this information back to the person using the screen reader.  

#### Designing for blindness

1. A key aspect of making accessible websites is to ensure that content on the web pages has been coded with the correct <strong>semantic meaning</strong> and that this meaning does not need to be interpreted or assumed based on the size and placement of the content within the page.
2. Since blind people cannot see the screen they can make no use of pointing devices sucgh as a mouse. They can however use a keyboard to tab between links and form fields in the web page. The screen reader will tell them where they are. So all <strong>functionality on a web page must be reachable using the keyboard</strong>.
3. All <strong>information must be presented as text</strong>. Screen readers cannot ready text within images, so information contained within images will not be accessible to blind people. This information needs to be also provided in plain text in order for a website to be fully accessible. 
4. All controls on a web page, such form fields, volume controls must have a correct label assigned to them. Additionally 


