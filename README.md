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
