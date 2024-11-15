package net.mmeany.greeting.model;

import lombok.Builder;
import lombok.extern.jackson.Jacksonized;

@Builder
@Jacksonized
public record Greeting(
    String name,
    String greeting
) {}
