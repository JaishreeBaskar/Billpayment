package com.cognizant.BillPayment.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.cognizant.BillPayment.model.USER;


@Repository
public interface UserRepository extends JpaRepository<USER, Integer> {

	@Query("FROM USER u where u.userid=?1")
    public USER findByUsername(String name);
    
    /*@Query("FROM USER u where u.username=?1")
	public USER getMenuItems(String username);*/
    
}
