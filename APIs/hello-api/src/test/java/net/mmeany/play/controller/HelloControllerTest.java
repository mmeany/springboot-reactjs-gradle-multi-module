package net.mmeany.play.controller;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.test.web.servlet.MockMvc;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

@WebMvcTest(HelloController.class)
class HelloControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Test
    void sayHello_NoParameter_ShouldReturnDefaultGreeting() throws Exception {
        mockMvc.perform(get("/api/hello"))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value("World"))
            .andExpect(content().contentType("application/json"));
    }

    @Test
    void sayHello_ValidName_ShouldReturnGreeting() throws Exception {
        String name = "John";
        mockMvc.perform(get("/api/hello").param("name", name))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value(name))
            .andExpect(content().contentType("application/json"));
    }

    @Test
    void sayHello_InvalidName_ShouldReturnBadRequest() throws Exception {
        mockMvc.perform(get("/api/hello").param("name", "123"))
            .andExpect(status().isBadRequest());
    }

    @Test
    void sayHelloAgain_ValidName_ShouldReturnGreeting() throws Exception {
        String name = "John";
        mockMvc.perform(get("/api/hello/{name}", name))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value(name))
            .andExpect(content().contentType("application/json"));
    }

    @Test
    void sayHelloAgain_InvalidName_ShouldReturnBadRequest() throws Exception {
        mockMvc.perform(get("/api/hello/{name}", "123"))
            .andExpect(status().isBadRequest());
    }

    @Test
    void sayHelloAgain_NameWithSpecialCharacters_ShouldReturnBadRequest() throws Exception {
        mockMvc.perform(get("/api/hello/{name}", "John@Doe"))
            .andExpect(status().isBadRequest());
    }

    @Test
    void sayHelloAgain_NameWithValidSpecialCharacters_ShouldReturnGreeting() throws Exception {
        String name = "Mary-Jane";
        mockMvc.perform(get("/api/hello/{name}", name))
            .andExpect(status().isOk())
            .andExpect(jsonPath("$.name").value(name))
            .andExpect(content().contentType("application/json"));
    }
}