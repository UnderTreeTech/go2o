package entity

import "time"

//食物
type FoodItem struct {
	Id    int    `db:"id" auto:"yes" pk:"yes"`
	Cid   int    `db:"cid"`
	Name  string `db:"name"`
	Image string `db:"img"`
	//成本价
	Cost float32 `db:"cost"`
	//定价
	Price float32 `db:"price"`
	//销售价
	SalePrice float32 `db:"sale_price"`
	ApplySubs string  `db:"apply_subs"`

	//简单备注,如:(限时促销)
	Note        string    `db:"note"`
	Description string    `db:"description"`
	State       int       `db:"state"`
	CreateTime  time.Time `db:"create_time"`
	UpdateTime  time.Time `db:"update_time"`
}

//食物属性
type FoodItemProperty struct {
	Id          int
	Description string
}
