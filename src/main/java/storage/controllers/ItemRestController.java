package storage.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import storage.domain.Category;
import storage.domain.Item;
import storage.repository.CategoryRepository;
import storage.repository.ItemRepository;
import storage.services.CategoryService;

@RestController
@RequestMapping("/api/items")
public class ItemRestController {

    @Autowired
    private ItemRepository itemRepository;
    
    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private CategoryService categoryService;
    


    @RequestMapping(method = RequestMethod.GET)
    public List<Item> getBooks() {
        return itemRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public Item post(@RequestBody Item item) {
        Item out = itemRepository.save(item);
         if (item.getCategories() != null) {
            this.categoryService.postItemWithCategory(out);
        }
        return out;
    }
    
    @RequestMapping(method = RequestMethod.DELETE, path="/{id}")
    public String delete(@PathVariable Long id) {
        this.categoryService.deleteItem(id);
        return "deleted";
    }
      
    @PutMapping("/setCategory/{id}")
        public String setCategory(@PathVariable(value = "id") Long id, @RequestBody Category category) {
         if (this.categoryRepository.getOne(category.getId()) != null) {
            this.categoryService.setCategory(id, category.getId());
        }
        return "done";
    }

  
}
