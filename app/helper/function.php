<?php
function showError($errors, $name)
{
    if($errors->has($name))
    return '
    <div class="alert alert-danger" role="alert">
    <strong>'.$errors->first($name).' </strong>
    </div>';
}
function getCategory($mang, $parent = 0, $tab = '', $idSelect)
{
    foreach ($mang as $value)
    {
        if ($value['parent'] == $parent)
        {
            if($value['id']==$idSelect) {
                echo '<option selected value="'.$value['id'].'">';
                echo $tab.$value['name'];
                echo '</option>';
             }
             else
             {
                echo '<option value="'.$value['id'].'">';
                echo $tab.$value['name'];
                echo '</option>';
            }
            getCategory($mang, $value['id'], $tab.'--|',$idSelect);
        }
    }
}

function showCategory($mang, $parent, $tab='')
{
    foreach ($mang as $value)
    {
        if ($value['parent'] == $parent)
        {
            echo '
            <div class="item-menu"><span>'.$tab.$value['name'].'</span>
                <div class="category-fix">
                    <a  href="/admin/category/edit/'.$value['id'].'"><i class="fa fa-edit"></i></a>
                    <a onclick="return del_cat()"  href="/admin/category/delete/'.$value['id'].'"><i class="fa fa-times"></i></i></a>

                </div>
            </div>';
            showCategory($mang, $value['id'], $tab.'=====||');
        }
    }
}

function Getlevel($mang, $parent , $count)
{
    foreach($mang as $value)
    {
        if($value["id"] == $parent)
        {
            $count++;

            if($value["parent"]==0)
            {
                return $count;
            }
            return Getlevel($mang, $value["parent"] , $count);
        }
    }
}