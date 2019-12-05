package com.cognizant.vendor.model;

import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name="role")
public class Role {

	@Id
	@Column(name="ro_id")
	private int id;
	
	@Column(name="ro_name")
	private String name;
	
	@JsonIgnore
	@ManyToMany
	@JoinTable(name="user_role", joinColumns = @JoinColumn(name="role_ro_id"), inverseJoinColumns = @JoinColumn(name="user_u_id"))
	private List<USER> users;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Role() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Role(int id, String name, List<USER> users) {
		super();
		this.id = id;
		this.name = name;
	}

	@Override
	public String toString() {
		return "Role [id=" + id + ", name=" + name + "]";
	}
	
}
