package net.mmeany.greeting.util;

import lombok.experimental.UtilityClass;
import net.mmeany.greeting.model.Greeting;
import org.apache.commons.lang3.StringUtils;

import java.util.List;
import java.util.Random;

@UtilityClass
public class GreetingUtils {

    public static final String DEFAULT_NAME = "World";

    private static final List<String> TEMPLATES = List.of(
        "Hello %s!",
        "Greetings %s!",
        "Good day, %s!",
        "Welcome, %s!",
        "Salutations %s!",
        "Good to see you, %s!",
        "Howdy, %s!",
        "Hey there, %s!",
        "What's up, %s!",
        "Hi %s!",
        "Nice to meet you, %s!",
        "Pleased to meet you, %s!",
        "How's it going, %s!",
        "What's new, %s!",
        "Good times, %s!",
        "How goes it, %s!",
        "What's happening, %s!",
        "Hey hey hey, %s!",
        "Long time no see, %s!",
        "It's a pleasure to meet you, %s!"
    );

    private static final Random RANDOM = new Random();

    public Greeting greet(final String name) {
        String useName = StringUtils.isBlank(name) ? DEFAULT_NAME : name;
        return Greeting.builder()
            .name(useName)
            .greeting(TEMPLATES.get(RANDOM.nextInt(TEMPLATES.size())).formatted(useName))
            .build();
    }
}
