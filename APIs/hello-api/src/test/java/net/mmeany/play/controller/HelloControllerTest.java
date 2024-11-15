package net.mmeany.play.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(HelloController.class)
class HelloControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void sayHello_NoNameProvided_ShouldReturnGreetingForWorld() throws Exception {
        mockMvc.perform(get("/api/hello"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.message").value("Hello, World!"));
    }

    @Test
    void sayHello_NameProvided_ShouldReturnGreetingForName() throws Exception {
        mockMvc.perform(get("/api/hello").param("name", "John"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.message").value("Hello, John!"));
    }

    @Test
    void sayHello_InvalidName_ShouldReturnBadRequest() throws Exception {
        mockMvc.perform(get("/api/hello").param("name", "1234"))
            .andExpect(status().isBadRequest());
    }
}