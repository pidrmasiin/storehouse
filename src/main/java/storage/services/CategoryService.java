package storage.services;

import java.util.ArrayList;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import storage.domain.Category;
import storage.domain.Item;
import storage.repository.CategoryRepository;
import storage.repository.ItemRepository;


/**
 *
 * @author petteri
 */
@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;
    @Autowired
    private ItemRepository itemRepository;

    @Transactional
    public void setCategory(Long itemId, Long categoryId) {
        Category c = this.categoryRepository.getOne(categoryId);
        Item i = this.itemRepository.getOne(itemId);
        if(i.getCategories() == null){
            i.setCategories(new ArrayList<>());
        }
        if(c.getItems() == null){
            c.setItems(new ArrayList<>());
        }
        if(!c.getItems().contains(itemId)){
            c.getItems().add(itemId);
        }
        if(!i.getCategories().contains(categoryId)){
            i.getCategories().add(categoryId);
        }
    }
    
    @Transactional
    public void postItemWithCategory(Item item) {
        for(Long x : item.getCategories()){
            Category c = this.categoryRepository.getOne(x);
            if(c.getItems() == null) {
                c.setItems(new ArrayList<Long>());
            }
            c.getItems().add(item.getId());
            this.categoryRepository.save(c);
        }
    }
    
    @Transactional
    public void deleteItem(Long itemId) {
        Item i = this.itemRepository.getOne(itemId);
        if(i.getCategories() != null){
            for(Long x : i.getCategories()){
                Category c = this.categoryRepository.getOne(x);
                c.getItems().remove(i.getId());
            }
        }
        this.itemRepository.delete(i);
    }
    
    @Transactional
    public void deleteCategory(Long itemId) {
        Category c= this.categoryRepository.getOne(itemId);
        if(c.getItems() != null){
            for(Long x : c.getItems()){
                Item i = this.itemRepository.getOne(x);
                i.getCategories().remove(c.getId());
            }
        }
        this.categoryRepository.delete(c);
    }
}
