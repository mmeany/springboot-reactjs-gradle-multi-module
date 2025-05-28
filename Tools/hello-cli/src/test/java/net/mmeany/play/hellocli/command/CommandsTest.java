package net.mmeany.play.hellocli.command;

import net.mmeany.greeting.util.GreetingUtils;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class CommandsTest {

    @Test
    void greetShouldReturnGreetingForProvidedName() {

        String name = "Alice";
        Commands commands = new Commands();
        String result = commands.greet(name);
        assertTrue(result.contains(name));
    }

    @Test
    void greetShouldReturnDefaultGreetingWhenNoNameProvided() {

        Commands commands = new Commands();
        String result = commands.greet(null);
        assertTrue(result.contains(GreetingUtils.DEFAULT_NAME));
    }
}