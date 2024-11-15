package net.mmeany.play.hellocli;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.shell.command.annotation.CommandScan;

@SpringBootApplication
@CommandScan
@ComponentScan(basePackages = {"net.mmeany.play.hellocli", "net.mmeany.play.hellocli.command"})
public class HelloCliApplication {

    public static void main(String[] args) {
        SpringApplication.run(HelloCliApplication.class, args);
    }
}
