package storage.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import storage.domain.ShoppingCart;
import storage.repository.ShoppingCartRepository;

@RestController
@RequestMapping("/api/shoppingcart")
public class ShoppingCartController {

    @Autowired
    private ShoppingCartRepository shoppingCartRepository;
    


    @RequestMapping(method = RequestMethod.GET)
    public List<ShoppingCart> getBooks() {
        return this.shoppingCartRepository.findAll();
    }

    @RequestMapping(method = RequestMethod.POST)
    public ShoppingCart post(@RequestBody ShoppingCart item) {
        return this.shoppingCartRepository.save(item);
    }
    
    @RequestMapping(method = RequestMethod.DELETE, path="/{id}")
    public String delete(@PathVariable Long id) {
        this.shoppingCartRepository.deleteById(id);
        return "deleted";
    }
  
}
