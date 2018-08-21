package storage.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import storage.domain.Item;
import storage.repository.ItemRepository;


@RestController
@RequestMapping("items")
public class ItemRestController {

    @Autowired
    private ItemRepository itemRepository;
    
    @CrossOrigin(origins = "/**")
    @RequestMapping(method=RequestMethod.GET)
      public List<Item> getBooks() {
        return itemRepository.findAll();
    }
}