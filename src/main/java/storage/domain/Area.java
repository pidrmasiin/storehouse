package storage.domain;

/**
 *
 * @author petteri
 */

import java.util.ArrayList;
import javax.persistence.Entity;
import javax.persistence.OneToOne;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.AbstractPersistable;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Area extends AbstractPersistable<Long> {
    private String name;
    @OneToOne
    private Owner owner;
    private ArrayList<Long> categories;
    
}
