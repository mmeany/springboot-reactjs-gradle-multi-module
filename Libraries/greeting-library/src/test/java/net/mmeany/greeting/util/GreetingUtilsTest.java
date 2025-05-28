package net.mmeany.greeting.util;

import net.mmeany.greeting.model.Greeting;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class GreetingUtilsTest {

    @Test
    void testGreet_withName() {

        String name = "John";

        Greeting result = GreetingUtils.greet(name);

        assertNotNull(result);
        assertEquals(name, result.name());
        assertTrue(result.greeting().contains(name));
    }

    @Test
    void testGreet_withBlankName() {

        String name = "   ";
        Greeting result = GreetingUtils.greet(name);

        assertNotNull(result);
        assertEquals(GreetingUtils.DEFAULT_NAME, result.name());
        assertTrue(result.greeting().contains(GreetingUtils.DEFAULT_NAME));
    }

    @Test
    void testGreet_withNullName() {

        String name = null;
        Greeting result = GreetingUtils.greet(name);

        assertNotNull(result);
        assertEquals(GreetingUtils.DEFAULT_NAME, result.name());
        assertTrue(result.greeting().contains(GreetingUtils.DEFAULT_NAME));
    }
}