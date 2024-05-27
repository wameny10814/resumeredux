import React from 'react'

function ProductManage() {
  return (
    <div>
        <h2>商品管理</h2>
        <div>
            <div>
                <button>新增</button>
            </div>
            <div>
                <div>
                    <div><span>品名</span></div>
                    <div><span>庫存</span></div>
                    <div><span>單價</span></div>
                    <div><span>分店</span></div>
                    <div><span>狀態</span></div>
                    <div><span>編輯</span></div>
                </div>
                <div>
                    <div>
                        <div><span>code</span></div>
                        <div><span>2</span></div>
                        <div><span>555</span></div>
                        <div><span>分店</span></div>
                        <div><span>上架中</span></div>
                        <div><button>編輯</button><button>刪除</button></div>
                    </div>
                    <div>
                        <div><span>code</span></div>
                        <div><span>15</span></div>
                        <div><span>120</span></div>
                        <div><span>分店</span></div>
                        <div><span>已下架</span></div>
                        <div><button>編輯</button><button>刪除</button></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProductManage