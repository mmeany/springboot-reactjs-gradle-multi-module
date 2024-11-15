## Spring Boot, ReactJS, MUI, Multi Module Gradle Project

Stater project for apps that will be packages as a Rest API developed as a Spring Boot Rest API packaged with
a ReactJS UI, all in a single project with a Gradle build.

### Modules

* Models/greeting-model: A shared model library
* Libraries/greeting-library: A shared greeting library, depends on `greeting-model`
* APIs/hello-api: Rest API, depends on `greeting-library`, `greeting-model` and `hello-api-ui`
* UI/hello-api-ui: ReactJS UI that is packaged into `hello-api` as static content
* Tools/hello-cli: A Spring Shell command line app that makes use of `greeting-library` and `greeting-model`

## To build

See `UI/hello-api-ui/build.gradle` as the location of `npm` on Windows is hard coded.

* The project can be built using standard `gradlew clean build`.
* Run the API
  ```shell
  java -jar helloApi-0.0.1-SNAPSHOT.jar
  ```
* Access the UI at `http://localhost:8080/api`
* 