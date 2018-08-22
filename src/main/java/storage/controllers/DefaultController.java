package storage.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import storage.domain.Item;
import storage.repository.ItemRepository;

@Controller
public class DefaultController {

    @Autowired
    private ItemRepository itemRepository;

    @GetMapping("/noreact")
    public String home(Model model) {
        model.addAttribute("items", this.itemRepository.findAll());
        System.out.println("Haloooo");

        return "index";
    }

    @PostMapping("/noreact")
    public String post(@RequestParam String name) {
        if (!name.trim().isEmpty() && !name.trim().isEmpty()) {
            Item item = new Item(name);
           this.itemRepository.save(item);
        }

        return "redirect:/index";
    }

}
