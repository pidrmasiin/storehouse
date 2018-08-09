/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package storage.repository;

/**
 *
 * @author petteri
 */
import org.springframework.data.jpa.repository.JpaRepository;
import storage.domain.Item;

public interface ItemRepository extends JpaRepository<Item, Long> {
}
