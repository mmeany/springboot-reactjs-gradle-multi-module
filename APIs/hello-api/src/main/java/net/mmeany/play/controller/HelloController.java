package net.mmeany.play.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.Valid;
import jakarta.validation.constraints.Pattern;
import lombok.extern.slf4j.Slf4j;
import net.mmeany.greeting.model.Greeting;
import net.mmeany.greeting.util.GreetingUtils;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@Slf4j
public class HelloController {

    @GetMapping("/hello")
    @Operation(summary = "Greet the entity making request")
    public ResponseEntity<Greeting> sayHello(
        @Valid
        @Schema(description = "Name of person making request. Must be a valid name!")
        @Pattern(regexp = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", message = "Not a valid name")
        @RequestParam(required = false)
        String name
    ) {
        log.info("Hello invoked with name as parameter, name passed '{}'", name);
        return hello(name);
    }

    @GetMapping("/hello/{name}")
    @Operation(summary = "Greet the entity making request")
    public ResponseEntity<Greeting> sayHelloAgain(
        @Valid
        @Schema(description = "Name of person making request. Must be a valid name!")
        @Pattern(regexp = "^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$", message = "Not a valid name")
        @PathVariable(name = "name")
        String name
    ) {
        log.info("Hello invoked with name in path, name passed '{}'", name);
        return hello(name);
    }

    private ResponseEntity<Greeting> hello(String name) {
        return ResponseEntity.ok(GreetingUtils.greet(name));
    }
}
