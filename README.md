## Spring Boot, ReactJS, MUI, Multi Module Gradle Project

Stater project for apps that will be packages as a Rest application developed as a Spring Boot Rest API packaged with
a ReactJS UI, all in a single project with a Gradle build.

There are a number of modules, as listed below, these are intended as placeholders for a larger project where they
would have more meaning.

The output of this project is the API. It is packaged as a single JAR file that can be run from the command line and
will present a REST API that can be accessed either externally or using the REACT UI that is built independently, but
packed into it.

### Modules

* `Models/greeting-model`: A shared model library
* `Libraries/greeting-library`: A shared greeting library, depends on `greeting-model`
* `APIs/hello-api`: Rest API, depends on `greeting-library`, `greeting-model` and `hello-api-ui`
* `UI/hello-api-ui`: ReactJS UI that is packaged into `hello-api` as static content
* `Tools/hello-cli`: A Spring Shell command line app that makes use of `greeting-library` and `greeting-model`

## To build

See `UI/hello-api-ui/build.gradle` as the location of `npm` on Windows is hard coded.

* The project can be built using standard `gradlew clean build`.
* Run the API
  ```shell
  java -jar helloApi-0.0.1-SNAPSHOT.jar
  ```
* Access the UI at `http://localhost:8080/api`

For instruction on local development see [UI Developer Notes](UI/hello-api-ui/README_DEVELOPER.md).

