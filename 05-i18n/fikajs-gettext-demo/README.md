# FikaJS - Using Ancient Technologies To Localize Modern Apps

We have a React app, it supports only english, and it's super easy to work with. Whenever we need to update text - we just do it in-place and that's it, text gets updated.

Now let's say we need to translate it. We go to github and find
a library with the most stars.

In our case it will be React-Intl. It's a nice library, it supports pluralizations, inflections, date and currency formatting. That's very good.

We install it.

**Show package.json**

I've already done it, to save time. Here it is in `package.json`.

**Open App.js**

React-intl provides bindings to react, so now in order to translate the page we wrap the text into `FormattedMessage` component. Let's import `FormattedMessage`.

**Import `FormattedMessage`**

Now let's wrap our lines in it.

**Wrap the HELLO FIKAJS line**

`FormattedMessage` accepts at least two attributes: `defaultMessage` this will be our string now.

And `id` so we can find the correspoding translation in our translations file.

**Wrap the Let's translate line**

Now let's do the same with the second line.

Ok the first part is done, we've changed our text to special components.

Now we need to obtain the translation files. We could create them manually - but it's cumbersome. And there are tools to do it automatically.

In our case as we generated the app with create-react-app - it is `react-intl-cra`.

I've already installed this package and added new script to package json.

**Show package.json**

Now let's run the extract command to get list of messages for translation.

**Run the command**

After we run this script - we'll get a list of exatracted messages in `/messages` folder.

Ok good, we have messages - let's generate locale files.

To do this i've installed another package `react-intl-translations-manager`, and added new script to package.json.

Let's run `yarn manage:translations`. After it's done - you'll see what keys were added or removed and if you have untranslated text or duplicate ids in your files.

At this point we can send our translation files to translation service. Some translation services provide CLI tools to do this.

Now let's send our texts for translations:

Let's run `yarn translations:send` - after it's done we'll wait until translators will do their job.

Let's say translations are done and we can download them.

We run `yarn translations:fetch`. And that's it, our app is now translated.

**Show the app**

Looks good, right? We have our text translated, we have scripts to manage our translation files.

Let's talk about problems now.

**Show the problems slide**

---

- Less readable code
- Need to invent names
- Need to keep names up to date
- Hard to reuse translations
- Hard to track changes in base translation

---

We've got less readable code - 4 lines instead of one. Instead of simple text we have React component with 2 or more props.

More code that is harder to read means that you'll have more cognitive load and will get tired faster.

You need to invent new id's for your translations, and it can be hard. Naming is one of the hardest problems in programming. You have to come up with something descriptive, but not too verbose.

And then you need to keep those names up to date, so they reflect what that translation is about. For example when I was working on Battlefield we had _Shipments_ screen, where player could get new weapons and gear. Then we renamed it to _Armory_, so all the namespaced ids had to be updated as well, to reflect that change.

It's hard to reuse translations. Well, it's not super hard, but you need to manually keep track of the translations that can be reused and have some shared namespace for them.

Hard to track changes in base translation.

Let's say we slightly change the text in our _defaultMessage_.

**Change text in App.js**

Now if we run `yarn extract:messages` - it will be reflected in our messages file.

**Show messages.jsons**

But if we run the `yarn manage:translations` it won't find any issues.

And we actually want to be notified about that slight change, because our translations should also be updated to reflect that.

Now let's try to solve all those problems.

To do that we looked a bit back in history. People had to localize apps before ReactJS and even web applications.

And we found **Gettext**. It's a software system for translating and localizing programs. And exists for quite a while now. First time it was introduced was 1990. So it's same age as me.

Let's remake our app to work with Gettext and see how will it help us.

**Checkout to gettext branch**

For the frontend part we used **Jed** it's javascrpt implementation of **Gettext**.

There are some libraries that provide react bindings, but as we only need to provide translations through react **context api** and pass text to **Jed** translate function - we created our own small wrapper library.

Let's checkout to gettext branch.

**Checkout to gettext branch**

We'll start by remaking layout. We open `App.js`, and now we can use `<T/>` component instead.

**Change FormattedMessage to T**

We don't need to specify `id` as text itself becomes an identifier, we don't need to specify the `default message` either, because provided text is also the fallback value.

Now we don't want to work with translations manually, so we extract the messages by running `yarn extract:messages`

**Run yarn extract:messages**.

It creates messages template file with gettext format. Not everyone likes it, but as a developer you don't really have to read it. This file contains messages extracted from code, and when you merge it with existing translations using gettext - it will add, remove or update messages in them.

Let's run `yarn merge:messages`.

**Run yarn merge:messages**

It updates our translations, and now we can push them to our translation service.

**Run yarn trans:push**

Then translators do their job, and when it's done we pull the updated translations using `yarn trans:pull`.

We have our translated files, but they are still in **Gettext** format. We need to convert them to **JSON**, so we can consume them in our React application.

**Run yarn trans:convert**

After translations are converted and are ready to consumption - we are ready to run the app again.

Now let's list the benefits of this **Gettext** flow.

**Show the problems slide and cross items out**

---

- Great readability
- No naming problems
- No need to update names 🤷‍
- Translation reuse for 🔥 FREE 🔥
- Fuzzy translations

---

And first one is that readability stays at the same level. You just have this little `<T>` component wrapping your text. It's almost like working with code that doesn't have to be localized. Text itself serves as both **identifier** and the default message.

Next, as we use text as an identifier - you don't have to come up with names for those texts.

No need to update the ids either - of course, because you don't have them.

Translation reuse comes for free. If you have same string used in multiple places - it will be just one item in your translations file. More reuse - less moneys to pay.

And finally - **fuzzy translations**. This feature is unique to gettext and it means that it automatically marks messages where base translation changed just a bit as fuzzy instead of creating new one.

Let's try it. We go to `App.js` and we slightly change the text.

**Go to App.js and update text**

Now if we run the extract again. And we merge updated template - we'll get this string marked as fuzzy.

**Run yarn trans:extract and yarn trans:merge**

And this is great, because now we are aware of that change in base language, so we can react and update the translations as well.

So as I said - using **Gettext** is great experience for us so far. The only downside I see there is that it uses sprintf format for placeholders. I would prefer the named ones.
