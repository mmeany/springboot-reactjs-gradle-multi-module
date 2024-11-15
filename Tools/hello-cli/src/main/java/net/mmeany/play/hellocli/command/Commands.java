package net.mmeany.play.hellocli.command;


import lombok.extern.slf4j.Slf4j;
import net.mmeany.greeting.util.GreetingUtils;
import org.springframework.shell.command.annotation.Command;
import org.springframework.shell.command.annotation.Option;

@Command(group = "Hospitality")
@Slf4j
public class Commands {

    public Commands() {
        log.info("Created");
    }

    @Command(description = "Greet someone")
    public String greet(
        @Option(description = "Name of person to greet", defaultValue = "World") String name) {
        return GreetingUtils.greet(name).greeting();
    }
}
