package storage.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import storage.domain.Category;
import storage.domain.Item;
import storage.repository.CategoryRepository;
import storage.repository.ItemRepository;
import storage.services.CategoryService;

@Controller
public class DefaultController {

    @Autowired
    private ItemRepository itemRepository;
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/noreact")
    public String home(Model model) {
        model.addAttribute("items", this.itemRepository.findAll());
        return "index";
    }

    @PostMapping("/noreact")
    public String post(@RequestParam String name) {
        if (!name.trim().isEmpty() && !name.trim().isEmpty()) {
            Item item = new Item();
            item.setName(name);
           this.itemRepository.save(item);
        }

        return "redirect:/noreact";
    }
    
//    @PutMapping("/setCategory/{id}")
//        public String setCategory(@PathVariable(value = "id") Long id, @RequestBody Category category) {
//         if (this.categoryRepository.getOne(category.getId()) != null) {
//            this.categoryService.setCategory(id, category.getId());
//        }
//        return "done";
//    }

}
