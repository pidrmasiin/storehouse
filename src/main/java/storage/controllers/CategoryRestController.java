/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package storage.controllers;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import storage.domain.Category;
import storage.repository.CategoryRepository;
import storage.services.CategoryService;

@RestController
@RequestMapping("/api/categories")
public class CategoryRestController {

    @Autowired
    private CategoryRepository categoryRepository;
    
    @Autowired
    private CategoryService categoryService;

    @RequestMapping(method = RequestMethod.GET)
    public List<Category> getAll() {
        return categoryRepository.findAll();
    }
    
    @RequestMapping(method = RequestMethod.POST)
    public Category post(@RequestBody Category category) {
        return categoryRepository.save(category);
    }
    
    @RequestMapping(method = RequestMethod.DELETE, path="/{id}")
    public String delete(@PathVariable Long id) {
        this.categoryService.deleteCategory(id);
        return "deleted";
    }
}
