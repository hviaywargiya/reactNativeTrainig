# React Native Trainig

# Assigment 1

# Mobile app development languages and tools

# Languages

    1 Java
    2 Python
    3Javascript
    4 C++
    5 Kotlin
    6 PHP
    7 C#
    8 Swift
    9 HTML 5
    10 Ruby on Rails (ROR)

# Tools

# Open Source

    1 Ionic
    2 Framework 7
    3 Buildfire
    4 Jquery Mobile

# Cross Platform & Hybrid Mobile App Development Tools

    1 Salasforce1
    2 Lighiting
    3 Xamarian
    4 xojo
    5 React Native

# Mobile vs Web Domain

# Mobile

        1 Faster and Advance to implement
        2 More Secure
        3 Developing cost is much high

# Web

        1 Quiker and easy to build.
        2 Not So much Secure
        3 Cost Effective

# Native vs Hybrid vs Cross Platform

# Assignment 2

# What platforms are available for mobile development?

    1  Visual Studio
    2  Xcode
    3  AndroidStudio
    4  OutSystems
    5  firebase
    6  GeneXus
    7  BuildFire
    8  Ionic
    9  Xamarin
    10 AppCode

# Native vs Cross Platform

# Native Platform:

    # Defination:  The term native app development refers to building a mobile app exclusively for a single platform. The app is built with programming languages and tools that are specific to a single platform. For example, you can develop a native Android app with Java or Kotlin and choose Swift and Objective-C for iOS apps.
    # Pros
       1 Broad Functionality
       2 Better Store Support
       3 Increase Scalabitlyt
       4 High Performance and great UX
    # Cons
       1 Costly
       2 Time Consuming

# Cross Platform

    # Defination: Cross-platform development points to the process of creating an app that works on several platforms. This is done by using tools like React Native, Xamarin, and Flutter, where the apps created can be deployed on both Android and iOS.
    # Pros
       1 Less Costly,
       2 Single Code Base
       3 Faster Development
    # Cons
       1 Slower App
       2 Limited Functionality
       3 Limited UX

# Core Difference React Native Ionic Flutter Corodova Xamarian

# The main Properties to Differentiate are:

    1 Language Stack.
    2 Performance.
    3 User Interface.
    4 Supported Platforms.
    5 Popular Applications.

    # React Native
      1 Use Javascript and React  as Language and which is Dynamic and  High Performance Language
      2 For Heavy operation We ccan get access to native modules
      3 It provides the apps with the performance similar to native apps.
      4 The modules of React Native work in tandem with native UI controllers which offers better user experience that is similar to native apps.
      5. Supported Platform: Android 4.1+, iOS 8+
      6. Popolar apps: Facebook, Instagram, UberEats, Airbnb, and more.

    # Ionic
      1  Ionic uses HTML5, CSS and JS for developing and running the mobile applications. They require Cordova wrapper to gain access to native platform controllers. When you are working with Ionic, the quality of the code is of utmost importance. Hence, it is possible to use TypeScript to improve the quality of the code.
      2 Ionic does not offer performance when compare to Flutter, React Native ,Corodova
      3 Supported Platform: Android 4.4+, iOS 8+, Windows 10.
      4 Polpular Apps: JustWatch, Pacifica, Nationwide and more.

    # Flutter
      1 When you are looking to build high quality applications, you should use Flutter which uses Dart for Android and iOS app development. Dart is a PL that offers various benefits and is based on C/C++ and Java. Because of Dart, the developers use Flutter to develop numerous apps.
      2 It offers amazing speed since it gets advantages from Dart.
      3 When it comes to user interface, Flutter is known to provide the best,
      4 Popular Apps: Hamilton.

# Why react native and why not?

# Why Not React Native

       1  Applications with complex User Interfaces.
       2  Building utilities such as battery monitors.
       3  Apps built specifically for a single OS.
       4  Apps utilizing a lot of Computation.
       5  Differently behaving components.
       6  Abstraction layer issue.
       7  Third-Party Resources.
       8  Testing and implementing hassles.
       9  Architecture issues.
       10 Community support

# Why to Use React Native

       1 React Native allows developers to create mobile apps using website technology. So a developer who is handy in web development can easily develop a mobile app using React Native.
       2 Since React Native uses JSX, a developer isn’t required to learn complex languages such as Objective-C and Java to develop an app.
       3 React Native allows developers to build cross-platform apps that look and feel entirely Native since it uses JavaScript components that are both built on iOS and Android components. It saves a lot of time and money as developers don’t have to create the same app for multiple platforms. Furthermore, it is easier to maintain an app built with React Native since there is only one codebase.
       4 React Native uses fundamental Android and iOS building blocks to compile Native apps for both platforms in JavaScript. This makes handling the code base easier, and the addition of new features is simplified as well, even while the app is running.
       5 Clients bound with a strict budget and timing constraints will find React Native the perfect choice. Since it doesn’t require a single app to be developed for multiple platforms, it saves them a lot of time and money. Furthermore, using React Native, they are not compromising on quality as well. JavaScript compiles the codebase to create a Native environment for an app on separate platforms. React Native also provides beautiful UI/UX and safety features which are commonly missing from Hybrid apps.
       6 In React Native we can easily develop and test features by using various libraries and tools like Expo, ESLint, Jest, and Redux.
       7 React Native allows you to build apps faster. Instead of recompiling, you can reload an app instantly. By making use of its Hot Reloading feature, you can even run new features while maintaining your application state.
       8 React Native provides a good developer community.
       9 On top of being responsive and providing an impressive user experience, React Native apps are faster and agile.

# Working of React Native

# There are 4 threads in the React Native App:

     1 UI Thread or Main Thread: Also known as Main Thread. This is used for native android or iOS UI rendering. For example, In android this thread is used for android measure/layout/draw happens.
     2 JS Module Thread:  thread or Javascript thread is the thread where the logic will run. For e.g., this is the thread where the application’s javascript code is executed, api calls are made, touch events are processed and many other. Updates to native views are batched and sent over to native side at the end of each event loop in the JS thread (and are executed eventually in UI thread).
     3 Native Module Thread: Sometimes an app needs access to platform API, and this happens as part of native module thread.
     4 Render Thread: Only in Android L (5.0), react native render thread is used to generate actual OpenGL commands used to draw your UI.

# Process involved in working of React Native

    1.At the first start of the app, the main thread starts execution and starts loading JS bundles.

    2. When JavaScript code has been loaded successfully, the main thread sends it to another JS thread because when JS does some heavy calculations stuff the thread for a while, the UI thread will not suffer at all any time.

    3. When React start rendering Reconciler starts “diffing”, and when it generates a new virtual DOM(layout) it sends changes to another thread(Shadow thread).

    4. Shadow thread calculates layout and then sends layout parameters/objects to the main(UI) thread. ( Here you may wonder why we call it “shadow”? It’s because it generates shadow nodes )

    5. Since only the main thread is able to render something on the screen, shadow thread should send generated layout to the main thread, and only then UI renders.

# Separation of React Native

    Generally, we can separate React Native into 3 parts:

        1) React Native – Native side

        2) React Native – JS side

        3) React Native – Bridge

    This is often called “The 3 Parts of React Native”

# Assignment 3

## Fundamentals of React Native

### What is React?

    React is the  popular open source library for building user interfaces with JavaScript.
    Core Concept Behind React:
        1. Components: Basic Element in react. Can be Functional and Class.
        2. Jsx: It the approach that allows you to write element in javascript.
        3. Props: Props is short for "properties". Props let you customize React components.
        4. State: state is like a component’s personal data storage. State is useful for handling data that changes over time or that comes from user interaction. State gives your components memory!

### How React is different from Javascript Frameworks?

1.  Simpification: React uses a special JSX syntax that lets you combine HTML with JavaScript.
2.  Reusable Element: Technology used to be far more complicated than that, but ReactJS provides us with the ability to do just the same
3.  Work well with SEO: ReactJS is working with SEO to perfection.
4.  Performance.
5.  Handy Support: React JS has gained credibility because of the availability of convenient set of tools, which allows the developers ‘ job even simpler.
6.  Easier to create interactive web apps.
7.  Access to Developers.
8.  ReactJS is a stronger framework because of its ability to break down the complex interface and allow users to work on individual components
9.  React has the very big community.

### Whats is the relationship between react and react native?

#### React Js

##### React has as its main focus Web Development.

    - React’s virtual DOM is faster than the conventional full refresh model, since the virtual DOM refreshes only parts of the page.
    - You can reuse code components in React, saving you a lot of time. (You can in React Native too.)
    - As a business: The rendering of your pages completely, from the server to the browser will improve the SEO of your web app.
    - It improves the debugging speed making your developer’s life easier.
    - You can use hybrid mobile app development, like Cordova or Ionic, to build mobile apps with React, but is more efficiently building mobile apps with React Native from many points.

##### An extension of React, niched on Mobile Development.

    - Its main focus is all about Mobile User Interfaces.
    - iOS & Android are covered.
    - Reusable React Native UI components & modules allow hybrid apps to render natively.
    - No need to overhaul your old app. All you have to do is add React Native UI components into your existing app’s code, without having to rewrite.
    - Doesn't use HTML to render the app. Provides alternative components that work in a similar way, so it wouldn't be hard to understand them.
    - Because your code doesn’t get rendered in an HTML page, this also means you won’t be able to reuse any libraries you previously used with React that renders any kind of HTML, SVG or Canvas.
    - React Native is not made from web elements and can’t be styled in the same way. Goodbye CSS Animations!

### React Native Cli VS Expo Cli

#### React Native CLI:

##### Advantages:

    1. You can add native modules written in Java/Objective-C (probably the strongest feature)
    2. You will be having control over the builds.

##### Disadvantages:

1.  Needs Android Studio and XCode to run the projects.
2.  You can't develop for iOS without having a mac.
3.  Device has to be connected via USB to use it for testing.
4.  Fonts need to be imported manually in XCode.
5.  If you want to share the app you need to send the whole .apk / .ipa file.
6.  Does not provide JS APIs out of the box, e.g. Push-Notifications, Asset Manager, they need to be manually installed and linked with npm for example.
7.  Setting up a working project properly (inlcuding device configuration) is rather complicated and can take time.

#### Expo CLI:

##### Advantages:

1.  Setting up a project is easy and can be done in minutes.
2.  You (and other people) can open the project while you're working on it.
3.  Sharing the app is easy (via QR-code or link), you don't have to send the whole .apk or .ipa file.
4.  No build necessary to run the app.
5.  Integrates some basic libraries in a standard project (Push Notifications, Asset Manager,...).
6.  You can eject it to ExpoKit and integrate native code continuing using some of the Expo features, but not all of them.
7.  Expo can build .apk and .ipa files (distribution to stores possible with Expo).

### How does react native code compile and execute?

    React Native uses the concept of “bridge”, which allows for asynchronous communication between the JavaScript and Native elements - the bridge concept lies at the very heart of React Native’s flexibility. Native and JavaScript elements are completely different technologies, but they are able to communicate.

    This type of architecture offers the benefit of using a lot of OS-native features, but also comes with important challenges; e.g. constant use of bridges inside the app may significantly slow down its performance. If you’re building an app that involves many events, a lot of data, etc. React Native might not be the best option. More on that below.

### How React Reconciliation works?

Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM. In this context, the virtual DOM will contain the new state of the component.

### TypeScript VS JavaScript

**TypeScript Code is converted into Plain JavaScript Code:** : TypeScript code is not understandable by the browsers. That’s why if the code is written in TypeScript then it is compiled and converted the code i.e. translate the code into JavaScript.The above process is known as **Trans-piled**. With the help of JavaScript code, browsers are able to read the code and display it.
**JavaScript is TypeScript:** Whatever code is written in JavaScript can be converted to TypeScript by changing the extension from .js to .ts.
**Use TypeScript anywhere:** TypeScript code can be run on any browser, device, or in any operating system. TypeScript is not specific to any Virtual-machine etc.
**TypeScript supports JS libraries:** With TypeScript, developers can use existing JavaScript code, incorporate popular JavaScript libraries, and can be called from other JavaScript code.

#### Differece

1.  TypeScript is known as an Object-oriented programming language whereas JavaScript is a scripting language.
2.  TypeScript has a feature known as Static typing but JavaScript does not have this feature.
3.  TypeScript gives support for modules whereas JavaScript does not support modules.
4.  TypeScript has Interface but JavaScript does not have an Interface.

#### Advantages

    1. TypeScript always points out the compilation errors at the time of development only. Because of this in the run-time, the chance of getting errors is very less whereas JavaScript is an interpreted language.
    2. TypeScript has a feature that is strongly typed or supports static typing. That means Static typing allows for checking type correctness at compile time. This is not available in JavaScript.
    3. TypeScript is nothing but JavaScript and some additional features i.e. ES6 features. It may not be supported in your target browser but the TypeScript compiler can compile the .ts files into ES3, ES4, and ES5 also.

#### Disadvantage

    * Generally, TypeScript takes time to compile the code.

### Hot Reload And Live Reload

**Hot reloading** only refreshes the files that were changed without losing the state of the app. For example, if you were four links deep into your navigation and saved a change to some styling, the state would not change, but the new styles would appear on the page without having to navigate back to the page you are on because you would still be on the same page.

**Live reloading** reloads or refreshes the entire app when a file changes. For example, if you were four links deep into your navigation and saved a change, live reloading would restart the app and load the app back to the initial route.

### Which is better for react native app - Javascript vs typescript?

Typescript is ultimalty transpiled to javascript. But when you write code in typescript and error of margin is very low as most of the error are resolved at complied time. And also your code is properly typed. For this reson most of the developers would prefer typescript over javascript although it takes some extra time to transpiled to javascript.

### Can I do native changes in case of expo?

Because you don't build any native code when using Expo to create a project, it's not possible to include custom native modules beyond the React Native APIs and components that are available in the Expo client app.

### Limitation of React Native Expo?

1. Not all iOS and Android APIs are available
2. If you need to keep your app size extremely lean, expo build:[android|ios] may not be the best choice.
3. Native libraries to integrate with proprietary services are usually not included in the SDK.
4. The only supported third-party push notification service is the Expo notification service.
5. The minimum supported OS versions are Android 5+ and iOS 10+.
6. Free builds can sometimes be queued.
7. Updates (JS and assets) for updates and builds are size-limited.
8. Your app cannot target only children under 13 years old without customizing native dependencies.
